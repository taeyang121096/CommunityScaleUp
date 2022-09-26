package com.scaleup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class ScaleupApplication {

    public static void main(String[] args) {
//		SpringApplication.run(ScaleupApplication.class, args);
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            new SpringApplicationBuilder(ScaleupApplication.class)
                    .properties(

                    ).run(args);
        } else {
            new SpringApplicationBuilder(ScaleupApplication.class)
                    .properties(

                    ).run(args);
        }
    }

}
