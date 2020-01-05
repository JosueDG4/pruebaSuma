package com.walmart.service;

import org.springframework.stereotype.Service;

@Service
public class SumaServiceImp implements SumaServicee{

	@Override
	public int resultadoSuma(int val1, int val2) {
		
		int suma = val1 + val2;
		return suma;
	}

}
