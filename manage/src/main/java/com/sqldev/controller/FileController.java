package com.sqldev.controller;

import com.sqldev.model.Files;
import com.sqldev.service.FilesService;
import com.sqldev.service.FilesServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FileController {

    @Autowired
    FilesServiceIn fileService;

    @GetMapping("/error")
    public String hello() {
        return "Hello world";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/files")
    public List<Files> getFiles() {
        return fileService.getAllFiles();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/insertfile")
    public void insertFile(@RequestBody Files files) {
        fileService.insertFile(files);
    }

}
