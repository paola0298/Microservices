package com.sqldev.service;

import com.sqldev.dao.FilesRepository;
import com.sqldev.model.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilesService implements FilesServiceIn {

    @Autowired
    FilesRepository filesRepo;

    public List<Files> getAllFiles() {
        List<Files> files = filesRepo.getAllFiles();
        return files;
    }

    @Override
    public void insertFile(Files files) {
        filesRepo.insertFile(files);
    }
}
