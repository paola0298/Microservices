package com.sqldev.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.sqldev.model.Files;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

@Repository
public class FilesRepositoryImpl extends JdbcDaoSupport implements FilesRepository {

    @Autowired
    DataSource dataSource;

    @PostConstruct
    private void initialize() {
        setDataSource(dataSource);
    }

    @Override
    public List<Files> getAllFiles() {
        String sql = "SELECT * FROM employee";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

        List<Files> result = new ArrayList<Files>();
        for (Map<String, Object> row : rows) {
            Files emp = new Files();
            emp.setUserName((String) row.get("userName"));
            emp.setFile((String) row.get("file"));
            emp.setDate((String) row.get("date"));
            emp.setFileName((String) row.get("fileName"));
            emp.setDate((String) row.get("dateOfCreation"));
            emp.setSize((int) row.get("size"));
            result.add(emp);
        }
        return result;
    }

    @Override
    public void insertFile(Files files) {
        String sql = "INSERT INTO files (userName, file, fileName, size, dateOfCreation) VALUES (?, ?, ?, ?, ?)" ;
        getJdbcTemplate().update(sql, new Object[]{
                files.getUserName(), files.getFile(), files.getFileName(), files.getSize(), files.getDate()
        });
    }
}
