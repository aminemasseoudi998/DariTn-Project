package tn.esprit.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entity.ImageVideo;
import tn.esprit.spring.interfaces.IImageVideoService;



@RestController 
@RequestMapping("/ImageVideo")
@CrossOrigin("*")
public class ImageVideoController {
	@Autowired 
	IImageVideoService  iImageVideoService ;
	
	// http://localhost:8089/SpringMVC/ImageVideo/retrieveAllImageVideo
		@GetMapping("/retrieveAllImageVideo") 
		@ResponseBody
		public List<ImageVideo> getImageVideo() {
			List<ImageVideo> listImageVideo = iImageVideoService.retrieveAllImageVideo();
			return listImageVideo;
			}
		
		// http://localhost:8085/SpringMVC/ImageVideo/Add-ImageVideo
		@PostMapping("/Add-ImageVideo")  
		public ImageVideo addImageVideo(@RequestBody  ImageVideo r)
		{
			return iImageVideoService.addImageVideo(r);
			
		}
		
		
		// http://localhost:8085/SpringMVC/ImageVideo/update-ImageVideo
		@PutMapping("/update-ImageVideo") 
		@ResponseBody
		public  ImageVideo updateImageVideo(@RequestBody ImageVideo r)
		{
			return iImageVideoService.updateImageVideo(r);
			 
		}
		
		// http://localhost:8085/SpringMVC/ImageVideo/retrieve-ImageVideo/{ImageVideo-id}
		@GetMapping("/retrieve-ImageVideo/{ImageVideo-id}") 
		@ResponseBody
		public ImageVideo getImageVideo(@PathVariable("ImageVideo-id") Long idImageVideo ) {
		return iImageVideoService.retrieveImageVideo(idImageVideo);
		
		}

		
		//http://localhost:8089/SpringMVC/ImageVideo/removeImageVideo/{ImageVideo-id}
		@DeleteMapping("/removeImageVideo/{ImageVideo-id}")
		@ResponseBody
		public void removeImageVideo(@PathVariable("ImageVideo-id") Long idImageVideo)
		{
			iImageVideoService.removeImageVideo(idImageVideo);
		}



}
