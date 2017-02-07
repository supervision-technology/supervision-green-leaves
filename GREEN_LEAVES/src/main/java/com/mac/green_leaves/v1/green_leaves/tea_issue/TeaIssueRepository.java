/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.tea_issue;

import com.mac.green_leaves.v1.green_leaves.tea_issue.model.TTeaIssue;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Don
 */
public interface TeaIssueRepository extends JpaRepository<TTeaIssue, Integer> {

    @Query(value = "SELECT MAX(number) FROM t_tea_issue WHERE branch=:branch", nativeQuery = true)
    public Integer getMaximumNumberByBranch(@Param("branch") Integer branch);

    public TTeaIssue findByDateAndBranchAndNumberAndType(Date date, Integer branch, Integer number, String type);

    public List<TTeaIssue> findByBranchAndStatus(Integer branch, String status);
}