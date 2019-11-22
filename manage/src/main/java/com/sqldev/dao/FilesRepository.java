package com.sqldev.dao;

import com.sqldev.model.Files;

import java.util.List;

public interface FilesRepository {
    List<Files> getAllFiles();
    void insertFile(Files files);
}
