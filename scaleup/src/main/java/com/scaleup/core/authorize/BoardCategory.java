package com.scaleup.core.authorize;

import lombok.Getter;

@Getter
public enum BoardCategory {
    인기("Popular"),
    유머("Humor"),
    소식("News"),
    정보("Information"),
    감동("Impression");
    private String value;

    private BoardCategory(String value) {
        this.value = value;
    }
}
