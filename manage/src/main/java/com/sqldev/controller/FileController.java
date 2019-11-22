package com.sqldev.controller;

import com.sqldev.dao.FilesRepository;
import com.sqldev.model.Files;
//import com.sqldev.service.FilesService;
//import com.sqldev.service.FilesServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class FileController {

//    @Autowired
//    FilesServiceIn fileService;
    @Autowired
    FilesRepository filesRepository;

    @RequestMapping(method = RequestMethod.POST, value = "/upload")
    public void uploadFile(Files file) {
        filesRepository.createFile(file);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/hello")
    public String hello() {
        return "Hello world";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/files")
    public List<Files> getAll() {
        return filesRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "files/{userName}")
    public List<Files> getUserFiles(@PathVariable String userName) {
        return filesRepository.getFileByUser(userName);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/file/{id}")
    public Files getById(@PathVariable Integer id) {
//        if (bookRepository.findById(id).isPresent()) {
        Files file = filesRepository.getFileById(id);
        System.out.println(file);
        return file;
//        }
//        System.out.println("Returning null in show()");
//        return null;
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
