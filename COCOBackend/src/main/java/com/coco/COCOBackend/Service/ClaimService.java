package com.coco.COCOBackend.Service;

import com.coco.COCOBackend.Entity.Claims;
import com.coco.COCOBackend.Enum.TypeClaim;

import java.util.List;
import java.util.Map;


public interface ClaimService  {
    public Claims addClaims( Claims claims) ;
    public Claims getClaimsById(Integer idClaims);
    public List<Claims> GetClaims() ;
    public List<Claims> findByUser(Integer id) ;
    public Claims Update( Claims claims) ;
    public Claims statusClaims(Integer idClaims , String status) ;
    public void deleteClaims(Integer idClaims );
    public Map<TypeClaim, Double> calculateClaimPercentage();


}
