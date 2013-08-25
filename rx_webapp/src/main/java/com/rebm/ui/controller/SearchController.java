package com.rebm.ui.controller;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.rebm.service.ServiceRequestDelegate;


@Controller
public class SearchController {
	static Logger log = Logger.getLogger(SearchController.class.getName());
	
	@RequestMapping("/searchrequests")
	public String handleDefaultSearchResults()
	{
		log.info("inside the search requests");
		
		
		
		
		return "searchresults";
	}
	
	@RequestMapping("/createservice")
	public String createServiceRequest()
	{
		
		HashMap<String,String> data = new HashMap<String,String>();
		data.put("name", "muhilan");
		ServiceRequestDelegate.invokeService("request",data);
		
		return "newrequestresults";
	}

}
