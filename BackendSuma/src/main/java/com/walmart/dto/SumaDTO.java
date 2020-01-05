package com.walmart.dto;

public class SumaDTO {
	
	private int valor1;
	private int valor2;
	private int resultado;
	
	
	public SumaDTO() {
		
	}
	
	public SumaDTO(int valor1, int valor2, int resultado) {
		super();
		this.valor1 = valor1;
		this.valor2 = valor2;
		this.resultado = resultado;
	}

	public int getValor1() {
		return valor1;
	}
	public void setValor1(int valor1) {
		this.valor1 = valor1;
	}
	public int getValor2() {
		return valor2;
	}
	public void setValor2(int valor2) {
		this.valor2 = valor2;
	}
	public int getResultado() {
		return resultado;
	}
	public void setResultado(int resultado) {
		this.resultado = resultado;
	}

	@Override
	public String toString() {
		return "SumaDTO [valor1=" + valor1 + ", valor2=" + valor2 + ", resultado=" + resultado + "]";
	}
	
	
	
	

}
