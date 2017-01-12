/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.dashboard;

import com.mac.green_leaves.v1.green_leaves.green_leaves_weigh.model.TGreenLeavesWeigh;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.TemporalType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Don
 */
public interface DashboardRepository extends JpaRepository<TGreenLeavesWeigh, Serializable> {

    @Query(value = "select \n"
            + "	m_route.index_no,\n"
            + "	ifnull(sum(t_green_leaves_weigh.normal_net_weight),0.0),\n"
            + "	ifnull(sum(t_green_leaves_weigh.super_net_weight),0.0)\n"
            + "from\n"
            + "	m_route\n"
            + "	left join t_green_leaves_weigh on t_green_leaves_weigh.route = m_route.index_no\n"
            + "where\n"
            + "	if(t_green_leaves_weigh.index_no is null, true, \n"
            + "	t_green_leaves_weigh.date between :formDate and :toDate and  t_green_leaves_weigh.type = :type)\n"
            + "group by\n"
            + "	m_route.index_no\n"
            + "	ORDER BY m_route.index_no", nativeQuery = true)
    public List<Object[]> getGreelLeavesWeighSummry(@Param("formDate") @Temporal(TemporalType.DATE) Date fromDate, @Param("toDate") @Temporal(TemporalType.DATE) Date toDate, @Param("type") String type);

    @Query(value = "select \n"
            + "	m_route.index_no,\n"
            + "	ifnull(sum(t_green_leaves_receive_detail.normal_leaves_quantity),0.0),\n"
            + "	ifnull(sum(t_green_leaves_receive_detail.super_leaves_quantity),0.0)\n"
            + "from\n"
            + "	m_route\n"
            + "	left join t_green_leaves_receive on t_green_leaves_receive.route = m_route.index_no\n"
            + "	left join t_green_leaves_receive_detail on t_green_leaves_receive_detail.green_leaves_receive = t_green_leaves_receive.index_no\n"
            + "where\n"
            + "	if(t_green_leaves_receive_detail.index_no is null, true, t_green_leaves_receive.date between :formDate and :toDate)\n"
            + "group by\n"
            + "	m_route.index_no\n"
            + " order by m_route.index_no", nativeQuery = true)
    public List<Object[]> getGreenLeavesReceiveSummry(@Param("formDate") @Temporal(TemporalType.DATE) Date fromDate, @Param("toDate") @Temporal(TemporalType.DATE) Date toDate);
}
