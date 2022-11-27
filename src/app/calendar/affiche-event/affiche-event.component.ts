import {Component, Input, OnInit} from '@angular/core';
import {CalendarServiceService} from "../calendar-service.service";
import {Calendar} from "../modalCalendar/calendar";
import {CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput} from "@fullcalendar/angular";
import {createEventId, INITIAL_EVENTS} from "../../event-utils";
import {Router} from "@angular/router";



@Component({
  selector: 'app-affiche-event',
  templateUrl: './affiche-event.component.html',
  styleUrls: ['./affiche-event.component.css']
})
export class AfficheEventComponent implements OnInit {

  @Input() listevent:Calendar[] = [];

  constructor(private calendarService : CalendarServiceService,private router:Router) { }

  title = 'cloudpi';
  calendarVisible = true;
  TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

  INITIAL_EVENTS4:EventInput[]= [
    {
      id: '0',
      title: 'All-day event',
      start: this.TODAY_STR
    },
    {
      id: '1',
      title: 'Timed event',
      start:  this.TODAY_STR
    }
  ];


  INITIAL_EVENTS2: EventInput[] ;
  INITIAL_EVENTS3:EventInput;

  calender : Calendar;
calendarOptions: CalendarOptions;
  currentEvents: EventApi[] = [];
  ngOnInit(): void {
    this.calender = new Calendar();
    this.INITIAL_EVENTS2= [] ;
   // console.log(Date().toString().replace(/T.*$/, '')) ;
   // this.listevent = new Calendar();
  this.eventToEventInput();
    console.log(this.INITIAL_EVENTS2);
    console.log(this.INITIAL_EVENTS4);

    this.calendarOptions= {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      initialEvents: this.INITIAL_EVENTS2, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)

      /* you can update a remote database when these fire:
       eventAdd:
      eventChange:
      eventRemove:
      */
    };



  }


  eventToEventInput(){
    for ( let i=0; i< this.listevent.length;i++ ){
      this.INITIAL_EVENTS3 ={
        id  : this.listevent[i].idCalendar.toString(),
        title : this.listevent[i].title,
        start: this.listevent[i].start

      }
      console.log(this.INITIAL_EVENTS3);

      this.INITIAL_EVENTS2.push(this.INITIAL_EVENTS3);
    //  this.INITIAL_EVENTS2.push(this.INITIAL_EVENTS3);
    }

  }




  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }


  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;


    calendarApi.unselect(); // clear date selection

    if (title) {
      this.calender.title=title;
      this.calender.start=selectInfo.startStr;
      this.calendarService.addcalendar(this.calender).subscribe(data=>Calendar);
    }

    let currenturl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute= () =>false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currenturl]);

  }
  deleteCalendar(idClendar){
    this.calendarService.deletecalendar(idClendar).subscribe(() => this.calender)
  }


  handleEventClick(clickInfo: EventClickArg, ) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();


    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
