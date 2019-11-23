package com.sqldev.dao;

import com.sqldev.model.Files;

import java.util.List;

public interface FilesRepository {
    public abstract void createFile(Files file);
    public abstract Files getFileById(Integer fileId);
    public abstract void deleteFileById(Integer fileId);
    public abstract List<Files> findAll();
    public abstract List<Files> getFileByUser(String userName);
    public abstract String getUserFile(String userName, String fileName);


}
