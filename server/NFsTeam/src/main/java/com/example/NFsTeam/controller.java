package com.coding.controllers;
@Restcontroller
@RequestMapping("/object")
public class controller {
    private server dao = new server();
    @GetMapping("")
    public String getObject() throws SQLException
    {
        return dao.getObject();
    }
}