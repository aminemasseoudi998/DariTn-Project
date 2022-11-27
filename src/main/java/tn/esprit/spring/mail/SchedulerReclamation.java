package tn.esprit.spring.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import tn.esprit.spring.entity.Reclamation;
import tn.esprit.spring.entity.ReclamationStatus;
import tn.esprit.spring.services.ReclamationService;

import java.util.List;

@Component
public class SchedulerReclamation {
    @Autowired
    private EmailServiceImpl emailService;
    

    @Autowired
    private ReclamationService reclamationService;


    @Scheduled(cron = "0 44 01 * * *")

    public void clotureReclamation(){
        System.out.println("------------------------ hehy ---------------------");

       List<Reclamation> reclamations =  reclamationService.findFixedReclamations();
       reclamations.forEach(reclamation -> {
    	 
           reclamation.setStatus(ReclamationStatus.CLOTUREE);
           emailService.sendSimpleMessage(reclamation.getUser().getEmail(), "Reclamation numero " + reclamation.getId() + " status changed", "cloturée");
       });
        System.out.println("------------------------ hehy ---------------------");

       reclamationService.saveAll(reclamations);
        System.out.println("------------------------ hehy ---------------------");

    }
}
