package org.languagelearning.language_app.dto.request.user;

public class UserFilterByNameRequest {
    private String userName;

    public UserFilterByNameRequest(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
