package com.sqldev.model;

public class Files {
    private String userName;
    private String file;
    private String fileName;
    private int size;
    private String date;

//    public Files(String userName, String file, String fileName, int size, String date) {
//        this.userName = userName;
//        this.file = file;
//        this.fileName = fileName;
//        this.size = size;
//        this.date = date;
//    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "Data [user name= " + userName + ", file name= " + fileName + ", file name= " + fileName + "]";
    }
}