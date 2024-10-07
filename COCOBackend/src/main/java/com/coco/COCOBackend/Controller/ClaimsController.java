package com.coco.COCOBackend.Controller;

import com.coco.COCOBackend.Entity.Claims;
import com.coco.COCOBackend.Enum.TypeClaim;
import com.coco.COCOBackend.Service.ClaimsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
    public class ClaimsController {
    @Autowired
    ClaimsServices claimService;

    @PostMapping("/addClaim")
    @CrossOrigin(origins = "http://localhost:4200")
    public Claims AddClaim(@RequestBody Claims claims) {

        return claimService.addClaims(claims);

    }
    @GetMapping("/GetALLClaims")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Claims> GetALLClaims(){
        return claimService.GetClaims();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/findByUser/{id}")
    public List<Claims> findByUser(@PathVariable("id") Integer id){
        return claimService.findByUser(id);
    }


    @GetMapping("/GetClaimsById/{idClaims}")
    @CrossOrigin(origins = "http://localhost:4200")
    public  Claims GetClaimsById(@PathVariable Integer idClaims){
        return claimService.getClaimsById(idClaims);
    }
    
    @PutMapping("/statusClaims/{idClaims}/{status}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Claims statusClaims(@PathVariable("idClaims") Integer idClaims,@PathVariable("status") String status) {
        return claimService.statusClaims(idClaims,status);
    }
    @DeleteMapping("/DeleteClaims/{idClaims}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void Delete(@PathVariable Integer idClaims){
         claimService.deleteClaims( idClaims);
    }

    @PutMapping("/UpdateClaims")
    @CrossOrigin(origins = "http://localhost:4200")
    public Claims UpdateClaims(@RequestBody Claims claims) {
      return  claimService.Update(claims);

    }
    @GetMapping("/claims/page")
    public Page<Claims> getClaimsByPage(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size) {
        return claimService.getClaimsWithPagination(page, size);
    }
    @GetMapping("/calculateClaimPercentage")
    @CrossOrigin(origins = "http://localhost:4200")
   public Map<TypeClaim, Double> calculateClaimPercentage(){
        return claimService.calculateClaimPercentage();
    }


}

