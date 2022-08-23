package com.scaleup.authentication.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Builder
@Getter
@Table(name = "files")
public class Files {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_no")
    private Long no;
    @NotNull
    private String fileName;
    @NotNull
    private String filePath;
    @NotNull
    private Long fileSize;
    @NotNull
    private String fileType;
    @NotNull
    private LocalDateTime fileRegistDateTime;
    @NotNull
    private String useYn;

    private LocalDateTime fileUpdateDateTime;

    @NotNull
    @Column(name = "item_no")

    private Long itemNo;

    //==비즈니스 로직==//
    public void updateUseYN(String useYn) {
        this.useYn = useYn;
    }

    public void updateUpdateDateTime(LocalDateTime now) {
        this.fileUpdateDateTime = now;
    }

    public void setItemNo(Long no) {
        this.itemNo = no;
    }

    public void setUseYn(String y) {
        this.useYn = y;
    }
}
