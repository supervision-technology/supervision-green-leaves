/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.zmaster.cheque;

import com.mac.green_leaves.v1.green_leaves.zmaster.cheque.model.MChequeBook;
import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Nidura Prageeth
 */
public interface GLChequeBookRepository extends JpaRepository<MChequeBook, Serializable>{
    
}