package com.scaleup.authentication.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.scaleup.core.authorize.FileType;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
@Getter
@Builder
@DynamicInsert
@Table(name = "fileInfos")
public class FileInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private Long id;

    @Column(name = "file_originFilename")
    private String originFilename;
    @Column(name = "file_storeFilename")
    private String storeFilename;
    @Column(name = "file_size")
    private Long fileSize;
    @Enumerated(EnumType.STRING)
    private FileType fileType;
    @Column(name = "file_datetime")
    private LocalDateTime dateTime;
    @Column(name = "file_UseYN", length=1)
    @JsonIgnore
    @ColumnDefault("'Y'")
    private String useYN;

    @JsonIgnore // 양반향 연관관계에서 무한루프에 빠지는것을 방지하기 위함
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    public void updateYN(String useYN) {
        this.useYN = useYN;
    }
    //== 비즈니스 로직 ==//
    public void setItem(Item item) {
        this.item = item;
    }
}
