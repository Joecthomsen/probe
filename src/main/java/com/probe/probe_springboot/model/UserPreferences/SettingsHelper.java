package com.probe.probe_springboot.model.UserPreferences;

public class SettingsHelper {

    public static String GeneratePCPid(String prefID, String choiceTypeId, String choiceId){
        return prefID + "##type##" + choiceTypeId + "##choice##" + choiceId;
    }


}
