package com.sqldev.controller;

import com.sqldev.dao.FilesRepository;
import com.sqldev.model.Files;
//import com.sqldev.service.FilesService;
//import com.sqldev.service.FilesServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;

// @CrossOrigin(origins = "http://localhost:80")

@RestController
public class FileController {

//    @Autowired
//    FilesServiceIn fileService;
    @Autowired
    FilesRepository filesRepository;

    @RequestMapping(method = RequestMethod.POST, value = "/upload")
    @CrossOrigin(origins = "*")
    public void uploadFile(Files file) {
        filesRepository.createFile(file);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hello")
    @CrossOrigin(origins = "*")
    public String hello() {
        return "Hello world";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/files")
    @CrossOrigin(origins = "*")
    public List<Files> getAll() {
        return filesRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/files/{userName}")
    @CrossOrigin(origins = "*")
    public List<Files> getUserFiles(@PathVariable String userName) {
        return filesRepository.getFileByUser(userName);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/file/{id}")
    @CrossOrigin(origins = "*")
    public Files getById(@PathVariable Integer id) {

        Files file = filesRepository.getFileById(id);
        System.out.println(file);
        return file;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getfile/{userName}/{fileName}")
    @CrossOrigin(origins = "*")
    public String getFile(@PathVariable String userName, @PathVariable String fileName) {
        String file  = filesRepository.getUserFile(userName, fileName);
        System.out.println(file);
        return file;
    }
//
//    @RequestMapping(method = RequestMethod.GET, value = "/files")
//    public List<Files> getFiles() {
//        return fileService.getAllFiles();
//    }
//
//    @RequestMapping(method = RequestMethod.POST, value = "/insertfile")
//    public void insertFile(@RequestBody Files files) {
//        fileService.insertFile(files);
//    }

}
