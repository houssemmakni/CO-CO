package com.coco.COCOBackend.Service.Message;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.coco.COCOBackend.Entity.Chatrromassistance;
import com.coco.COCOBackend.Entity.MessageChattrom;
import com.coco.COCOBackend.Entity.User;
import com.coco.COCOBackend.Repo.MessageChattromRepo;
import com.coco.COCOBackend.Repo.ChatrromAssitanceRepo;
import com.coco.COCOBackend.Repo.UserRepository;

import java.util.Date;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MessageService {
    @Autowired
    private UserRepository  userRepository;
    @Autowired
    private ChatrromAssitanceRepo chatroomRepo;
    @Autowired
    private MessageChattromRepo messageRepo;

    public MessageChattrom AddMessage(MessageChattrom m,Integer idroom,Integer idu)  {
        Optional<Chatrromassistance> c=chatroomRepo.findById(idroom);
        if(c.isPresent()){
            Optional<User> u=userRepository.findById(idu);
            if(u.isPresent()){
                m.setChatroom(c.get());
                m.setUser(u.get());
                m.setDateTime(new Date());
                MessageChattrom newmessage=messageRepo.save(m);
                return newmessage;
            }
        }
        return null;
    }
    public MessageChattrom UpdateMessage(MessageChattrom m){
        Optional<MessageChattrom>optionalMessage=messageRepo.findById(m.getMessageId());
        if(optionalMessage.isPresent()){
            optionalMessage.get().setContent(m.getContent());
            optionalMessage.get().setDateTime(new Date());
            MessageChattrom updatemessage=messageRepo.save(optionalMessage.get());
            return updatemessage;
        }
        return null;
    }
    public void removeMessage(Integer id){
        messageRepo.deleteById(id);
    }
}
