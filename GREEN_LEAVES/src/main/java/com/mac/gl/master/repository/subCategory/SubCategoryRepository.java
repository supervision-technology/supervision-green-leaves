/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.gl.master.repository.subCategory;

import com.mac.gl.master.model.subCategory.SubCategory;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author kalum
 */
public interface SubCategoryRepository extends JpaRepository<SubCategory,Integer>{
    
    public List<SubCategory>findByName(String name);
    
    public List<SubCategory>FindByNameAndIndexNo(String name, Integer indexNo);
    
}
