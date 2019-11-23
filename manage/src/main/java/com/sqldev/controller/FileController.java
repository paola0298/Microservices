package com.sqldev.controller;

import com.sqldev.dao.FilesRepository;
import com.sqldev.model.Files;
//import com.sqldev.service.FilesService;
//import com.sqldev.service.FilesServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
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
    public void uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("userName") String user) {

        java.util.Date utilDate = new java.util.Date();
        java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());

        Files fileObj = new Files();
        fileObj.setUserName(user);
        fileObj.setDate(sqlDate);

//
//        try {
//            String encoded = Base64.getEncoder().encodeToString(file.getBytes());
//            fileObj.setFile(encoded);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }


        try {

            fileObj.setFile(new String(file.getBytes()));
        } catch (IOException e) {
//            e.printStackTrace();
            System.out.println("Error");
            System.out.println(e.getMessage());
        }

        fileObj.setFileName(file.getOriginalFilename());
        fileObj.setSize((int)(file.getSize()));
        fileObj.setFileType(file.getContentType());

        filesRepository.createFile(fileObj);
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

    @RequestMapping(method = RequestMethod.GET, value = "/download/f={fileName}&u={user}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Resource> getFile(@PathVariable String fileName, @PathVariable String user) {

        Files file = filesRepository.getUserFile(user, fileName);
        File fileToDownload = new File(fileName);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
//        headers.add("Access-Control-Allow-Origin", "*");

        try {
            FileOutputStream os = new FileOutputStream(fileToDownload);
            os.write(file.getFile().getBytes());
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            InputStreamResource resource = new InputStreamResource(new FileInputStream(fileToDownload));
            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(fileToDownload.length())
                    .contentType(MediaType.parseMediaType("application/octet-stream"))
                    .body(resource);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(null);
        }
    }

//    @RequestMapping(method = RequestMethod.GET, value = "/getfile/{userName}/{fileName}")
//    @CrossOrigin(origins = "*")
//    public ResponseEntity<Resource> getFile(@PathVariable String userName, @PathVariable String fileName) {
//        Files file  = filesRepository.getUserFile(userName, fileName);
//        System.out.println(file);
//        ResponseEntity<Resource> response = ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(file.getFileType()))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"")
//                .body(new ByteArrayResource(file.getFile().getBytes()));
//        return response;
////        return file;
//    }
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
