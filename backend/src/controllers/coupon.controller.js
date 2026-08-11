import Coupon from "../models/coupon.model.js";
import { validateCouponSchema } from "../validators/coupon.validator.js";

export const getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({
      isActive: true,
      userId: req.user._id,
    });

    res.json(coupon);
  } catch (error) {
    console.error("Error fetching coupon:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const validateCoupon = async (req, res) => {
  try {
    const parsed = validateCouponSchema.safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        errors,
        message: "Invalid data",
      });
    }

    const { code } = parsed.data;

    const coupon = await Coupon.findOne({
      code: code.toUpperCase(),
      isActive: true,
    });

    if (!coupon) {
      return res.status(404).json({
        message: "Coupon not found or inactive",
      });
    }

    if (coupon.expirationDate < new Date()) {
      coupon.isActive = false;
      await coupon.save();

      return res.status(400).json({
        message: "Coupon has expired",
      });
    }

    res.json({
      code: coupon.code,
      discountPercentage: coupon.discountPercentage,
    });
  } catch (error) {
    console.error("Error validating coupon:", error.message);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};