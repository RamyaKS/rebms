package com.rebm.ui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/home")
public class HomeController {
	
	
	@RequestMapping(method=RequestMethod.GET)
	public String handleRequest(Model model)
	{
		System.out.println("inside the handler method");
		  model.addAttribute("message", "Hello World!");
		 return "home";
	}

}
