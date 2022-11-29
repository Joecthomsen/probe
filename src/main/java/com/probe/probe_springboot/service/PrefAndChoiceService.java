package com.probe.probe_springboot.service;

import com.probe.probe_springboot.model.UserPreferences.*;
import com.probe.probe_springboot.repositories.UserPreferences.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrefAndChoiceService {

    private final ChoiceRepository choiceRepository;
    private final PrefRepository prefRepository;
    private final ChoiceTypeRepository choiceTypeRepository;

    private final PrefChoicePairRepository prefChoicePairRepository;


    public PrefAndChoiceService(ChoiceRepository choiceRepository,
                                PrefRepository prefRepository,
                                ChoiceTypeRepository choiceTypeRepository,
                                PrefChoicePairRepository prefChoicePairRepository) {
        this.choiceRepository = choiceRepository;
        this.prefRepository = prefRepository;
        this.choiceTypeRepository = choiceTypeRepository;
        this.prefChoicePairRepository = prefChoicePairRepository;
    }

    public Choicee AddChoicee(Choicee choicee){
        try {
            return choiceRepository.save(choicee);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public Pref AddPref(Pref pref){
        try {
            return prefRepository.save(pref);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public ChoiceType AddChoiceType(ChoiceType choiceType){
        try {
            return choiceTypeRepository.save(choiceType);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public PrefChoicePair AddPrefChoicePair(PrefChoicePair prefChoicePair){
        try {
            return prefChoicePairRepository.save(prefChoicePair);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

}

