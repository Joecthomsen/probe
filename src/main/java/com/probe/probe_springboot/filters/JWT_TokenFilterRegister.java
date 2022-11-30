package com.probe.probe_springboot.filters;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;


@Configuration
public class JWT_TokenFilterRegister {

    @Bean
    public FilterRegistrationBean<JWT_TokenFilter> registerJWT_TokenFilter(){
        FilterRegistrationBean<JWT_TokenFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new JWT_TokenFilter());
        registrationBean.addUrlPatterns("/user/authorize/*");
        registrationBean.addUrlPatterns("/editTrial/*");
       // registrationBean.addUrlPatterns("/userSettings/*");

        return registrationBean;
    }

}
