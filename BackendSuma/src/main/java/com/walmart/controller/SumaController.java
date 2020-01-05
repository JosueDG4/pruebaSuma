package com.walmart.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.walmart.service.SumaServicee;

@CrossOrigin("http://localhost:4202")
@RestController
@RequestMapping("/resultSuma")
public class SumaController {
  
	@Autowired 
	private SumaServicee service; 
	
    @GetMapping(value="/getSuma",  produces=MediaType.APPLICATION_JSON_VALUE)
    public Integer greeting(@RequestParam(name="numero1") int numero1, @RequestParam(name="numero2") int numero2) {
    	
    	int suma = service.resultadoSuma(numero1, numero2);
    	return suma;
    } 
    
 
}
