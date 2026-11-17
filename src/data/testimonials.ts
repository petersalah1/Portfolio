export interface Testimonial {
  id: string;
  clientName: string;
  roleOrBrand: string;
  projectTitle: string;
  avatar?: string;
  quote: string;
  resultsAchieved?: string;
}

/**
 * 💡 كيفية تفعيل سكشن آراء العملاء (Testimonials):
 * السكشن مخفي حالياً ومبرمج لكي لا يظهر إلا عندما تضيف على الأقل رأي عميل حقيقي واحد هنا.
 * لن يتم توليد أو عرض أي تقييم مزيف نهائياً.
 * 
 * لإضافة رأي عميل حقيقي، أضف كائن داخل المصفوفة:
 * {
 *   id: "1",
 *   clientName: "أ. محمد عبد الله",
 *   roleOrBrand: "مدرس فيزياء للثانوية العامة",
 *   projectTitle: "منصة كورسات خاصة",
 *   quote: "المنصة ريحتني تماماً من متابعة الدفع اليدوي وجمعت كل طلابي في مكان محمي وسهل الاستخدام.",
 *   resultsAchieved: "أكثر من 300 طالب مشترك في أول شهر"
 * }
 */
export const testimonials: Testimonial[] = [];
