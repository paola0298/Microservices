package com.sqldev.service;

import com.sqldev.model.Files;

import java.util.List;

public interface FilesServiceIn {
    List<Files> getAllFiles();
    void insertFile(Files files);
}
