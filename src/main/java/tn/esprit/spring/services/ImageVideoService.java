package tn.esprit.spring.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.interfaces.IImageVideoService;
import tn.esprit.spring.repository.ImageVideoRepository;
import tn.esprit.spring.entity.ImageVideo;


@Service
public class ImageVideoService  implements IImageVideoService {
	@Autowired
	ImageVideoRepository imageVideoRepository;
	
	@Override
	public List<ImageVideo> retrieveAllImageVideo() {
		return imageVideoRepository.findAll();
	}

	@Override
	public ImageVideo addImageVideo(ImageVideo r) {
		//r.setDate(LocalDate.now());
		return imageVideoRepository.save(r);
	}

	@Override
	public ImageVideo updateImageVideo(ImageVideo r) {
		return imageVideoRepository.save(r);
	}

	@Override
	public ImageVideo retrieveImageVideo(Long id) {
		return imageVideoRepository.findById(id).orElse(null);
	}

	@Override
	public void removeImageVideo(Long id) {
		imageVideoRepository.deleteById(id);
		
	}


}
