package tn.esprit.spring.service;

import java.util.List;


import tn.esprit.spring.entity.Coupon;

public interface CouponService {

	Coupon saveCoupon(Coupon c, Long idUser);
	Coupon updateCoupon(Coupon c);
	void deleteCoupon(Coupon c);
	void deleteCouponById(Long id);
	Coupon getCoupon(Long id);
	List<Coupon> getAllCoupons();
	
}
