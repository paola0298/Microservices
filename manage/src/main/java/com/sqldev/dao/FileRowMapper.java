package com.sqldev.dao;

import com.sqldev.model.Files;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FileRowMapper implements RowMapper<Files> {

    @Override
    public Files mapRow(ResultSet rs, int column) throws SQLException {
        Files file = new Files();
        file.setUserName(rs.getString("userName"));
        file.setFile(rs.getString("file"));
        file.setFileType((rs.getString("fileType")));
        file.setFileName(rs.getString("fileName"));
        file.setSize(rs.getInt("size"));
        file.setDate(rs.getDate("dateOfCreation"));
        return file;
    }
}
