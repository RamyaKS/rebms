package com.rebm.service;

import java.util.Map;

import org.apache.cxf.jaxrs.client.WebClient;

public class ServiceRequestDelegate {
	static final String REST_URI = "http://localhost:9999/request";
	static final String ADD_PATH = "/storeRequest/";
	static final String ACCEPT_TYPE = "application/json";
	
	public static void invokeService(String requestID,Map<String, String> data)
	{
		WebClient createReqestClient = WebClient.create(REST_URI);
		createReqestClient.path(ADD_PATH).path(requestID).accept(ACCEPT_TYPE).post(data);
		System.out.print("after ws call"+createReqestClient.toString());
	}

}
