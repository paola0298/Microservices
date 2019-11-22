package com.sqldev.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.sqldev.model.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Repository
//public class FilesRepositoryImpl extends JdbcDaoSupport implements FilesRepository {
public class FilesRepositoryImpl implements FilesRepository {
//    @Autowired
//    DataSource dataSource;
//
//    @PostConstruct
//    private void initialize() {
//        setDataSource(dataSource);
//    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createFile(Files file) {
        String createFileSql = "INSERT INTO files(userName, file, fileName, size, dateOfCreation) VALUES (?, ?, ?, ?, ?)";
        int update = jdbcTemplate.update(createFileSql, file.getUserName(), file.getFile(), file.getFileName(), file.getSize(), file.getDate());
        if (update == 1) {
            System.out.println("File is created...");
        }
    }

    @Override
    public Files getFileById(Integer fileId) {
        String getFile = "SELECT * FROM files WHERE id=?";
        Files file = jdbcTemplate.queryForObject(getFile, new FileRowMapper(), fileId);
        return file;
    }

    @Override
    public void deleteFileById(Integer fileId) {
        String deleteFile = "SELECT * FROM files WHERE id=?";
        int update = jdbcTemplate.update(deleteFile, fileId);
        if (update == 1) {
            System.out.println("File is Deleted...");
        }
    }

    @Override
    public List<Files> findAll(){
        String find = "SELECT * FROM files";
        List<Files> files = jdbcTemplate.query(find, new FileRowMapper());
        System.out.println(files);
        return files;
    }

    @Override
    public List<Files> getFileByUser(String userName) {
        String findUser = "SELECT * FROM files WHERE userName=?";
        List<Files> filesList = jdbcTemplate.query(findUser, new FileRowMapper(), userName);
        return filesList;
    }
//    @Override
//    public List<Files> getAllFiles() {
//        String sql = "SELECT * FROM employee";
//        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
//
//        List<Files> result = new ArrayList<Files>();
//        for (Map<String, Object> row : rows) {
//            Files emp = new Files();
//            emp.setUserName((String) row.get("userName"));
//            emp.setFile((String) row.get("file"));
//            emp.setDate((String) row.get("date"));
//            emp.setFileName((String) row.get("fileName"));
//            emp.setDate((String) row.get("dateOfCreation"));
//            emp.setSize((int) row.get("size"));
//            result.add(emp);
//        }
//        return result;
//    }
//
//    @Override
//    public void insertFile(Files files) {
//        String sql = "INSERT INTO files (userName, file, fileName, size, dateOfCreation) VALUES (?, ?, ?, ?, ?)" ;
//        getJdbcTemplate().update(sql, new Object[]{
//                files.getUserName(), files.getFile(), files.getFileName(), files.getSize(), files.getDate()
//        });
//    }
}
