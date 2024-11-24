package org.languagelearning.language_app.dto.response;

public class ResponseLogin {
    private String userName;
    private Long id;
private String password;
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    private String token;  // Add token field

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ResponseLogin(String userName,String password) {
        this.userName = userName;
        this.password =password ;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
