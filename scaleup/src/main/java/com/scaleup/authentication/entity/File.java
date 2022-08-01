package com.scaleup.authentication.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "files")
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_no")
    private Long no;
    @NotNull
    private String fileName;
    @NotNull
    private String filePath;
    @NotNull
    private int fileSize;
    @NotNull
    private String fileType;
    @NotNull
    private LocalDateTime fileRegistDateTime;
    @NotNull
    private String useYn;

    private LocalDateTime fileUpdateDateTime;

}
