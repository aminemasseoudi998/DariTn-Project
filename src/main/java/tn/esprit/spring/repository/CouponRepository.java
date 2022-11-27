package tn.esprit.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import tn.esprit.spring.entity.Coupon;

public interface CouponRepository  extends JpaRepository<Coupon, Long> {
	Coupon findByCode(String code);

}

