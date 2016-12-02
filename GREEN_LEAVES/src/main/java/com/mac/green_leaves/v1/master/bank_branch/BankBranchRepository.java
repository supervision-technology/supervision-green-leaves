/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.master.bank_branch;

import com.mac.green_leaves.v1.master.bank_branch.model.MBankBranch;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Supervision
 */
public interface BankBranchRepository extends JpaRepository<MBankBranch, Integer>{
    
     public List<MBankBranch> findByBranchCodeOrName(String code,String name);
}
