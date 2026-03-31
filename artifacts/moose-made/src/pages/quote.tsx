import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitQuote } from "@workspace/api-client-react";
import { ArrowRight, ArrowLeft, CheckCircle2, Box } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  // Step 1
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Step 2
  productCategory: z.string().min(2, "Required"),
  packagingType: z.string().min(2, "Required"),
  
  // Step 3
  dimensions: z.string().optional(),
  weight: z.string().optional(),
  quantity: z.string().min(1, "Required"),
  budgetRange: z.string().optional(),
  
  // Step 4
  launchTimeline: z.string().optional(),
  materialPreferences: z.string().optional(),
  structuralFeatures: z.string().optional(),
  projectDescription: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "Contact" },
  { id: 2, title: "Product" },
  { id: 3, title: "Specs" },
  { id: 4, title: "Details" },
  { id: 5, title: "Review" },
];

export default function Quote() {
  const { toast } = useToast();
  const submitQuote = useSubmitQuote();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      productCategory: "",
      packagingType: "",
      dimensions: "",
      weight: "",
      quantity: "",
      budgetRange: "",
      launchTimeline: "",
      materialPreferences: "",
      structuralFeatures: "",
      projectDescription: "",
    },
    mode: "onChange",
  });

  const triggerStepValidation = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 1) fieldsToValidate = ["firstName", "lastName", "email"];
    if (currentStep === 2) fieldsToValidate = ["productCategory", "packagingType"];
    if (currentStep === 3) fieldsToValidate = ["quantity"];
    
    if (fieldsToValidate.length > 0) {
      const isValid = await form.trigger(fieldsToValidate as any);
      return isValid;
    }
    return true;
  };

  const nextStep = async () => {
    const isValid = await triggerStepValidation();
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = (data: FormValues) => {
    submitQuote.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSubmitted(true);
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an error submitting your request. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  const formValues = form.watch();

  if (isSubmitted) {
    return (
      <div className="bg-background min-h-[80vh] flex items-center justify-center py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 max-w-2xl w-full border border-border text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-secondary text-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-serif font-semibold mb-4">Request Received</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you, {formValues.firstName}. Our packaging engineering team is reviewing your details and will return a preliminary estimate within 24 hours.
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              form.reset();
              setCurrentStep(1);
              setIsSubmitted(false);
            }}
            className="rounded-none border-border h-12 px-8"
          >
            Submit Another Project
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-background pt-12 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-primary">
            Project <span className="text-accent italic font-light">Estimator</span>
          </h1>
          <p className="text-muted-foreground">Provide as much detail as possible to receive an accurate quote.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="flex justify-between relative z-10">
            {STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors duration-300 bg-background
                    ${currentStep === step.id ? 'border-primary text-primary' : 
                      currentStep > step.id ? 'border-primary bg-primary text-primary-foreground' : 
                      'border-border text-muted-foreground'}`}
                >
                  {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                </div>
                <span className={`text-xs mt-2 font-medium hidden sm:block
                  ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-border z-0 -translate-y-1/2 mx-5">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white border border-border shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 md:p-12">
              
              {/* STEP 1: Contact Info */}
              {currentStep === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-serif font-semibold mb-8 border-b border-border pb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl><Input className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl><Input className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="space-y-6">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl><Input type="email" className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl><Input type="tel" className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Brand Name (Optional)</FormLabel>
                        <FormControl><Input className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Product Info */}
              {currentStep === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-serif font-semibold mb-8 border-b border-border pb-4">What are we packaging?</h2>
                  
                  <div className="space-y-8">
                    <FormField control={form.control} name="productCategory" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Product Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-12 bg-background/50">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="food_beverage">Food & Beverage</SelectItem>
                            <SelectItem value="health_beauty">Health & Beauty</SelectItem>
                            <SelectItem value="apparel">Apparel & Fashion</SelectItem>
                            <SelectItem value="electronics">Consumer Electronics</SelectItem>
                            <SelectItem value="home_goods">Home Goods</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="packagingType" render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-base">Primary Packaging Type *</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              { id: "folding_carton", label: "Folding Carton", desc: "Lightweight retail boxes" },
                              { id: "corrugated", label: "Corrugated Mailer", desc: "Sturdy e-commerce shipping boxes" },
                              { id: "rigid_box", label: "Rigid Box", desc: "Premium thick luxury boxes" },
                              { id: "flexible_pouch", label: "Flexible Pouch", desc: "Stand-up or flat resealable bags" },
                              { id: "tube", label: "Paper Tube", desc: "Cylindrical rigid containers" },
                              { id: "not_sure", label: "Not Sure Yet", desc: "I need recommendations" },
                            ].map((type) => (
                              <FormItem key={type.id} className="flex items-start space-x-3 space-y-0 border border-border p-4 hover:bg-secondary cursor-pointer [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-secondary transition-colors">
                                <FormControl>
                                  <RadioGroupItem value={type.id} className="mt-1" />
                                </FormControl>
                                <div className="space-y-1">
                                  <FormLabel className="font-medium cursor-pointer">{type.label}</FormLabel>
                                  <p className="text-xs text-muted-foreground">{type.desc}</p>
                                </div>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Specs */}
              {currentStep === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-serif font-semibold mb-8 border-b border-border pb-4">Specifications</h2>
                  
                  <div className="space-y-6">
                    <FormField control={form.control} name="quantity" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Estimated Order Quantity *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-12 bg-background/50">
                              <SelectValue placeholder="Select quantity range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1000_2500">1,000 - 2,500 units</SelectItem>
                            <SelectItem value="2500_5000">2,500 - 5,000 units</SelectItem>
                            <SelectItem value="5000_10000">5,000 - 10,000 units</SelectItem>
                            <SelectItem value="10000_50000">10,000 - 50,000 units</SelectItem>
                            <SelectItem value="50000_plus">50,000+ units</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="dimensions" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dimensions (L x W x D) (Optional)</FormLabel>
                          <FormControl><Input placeholder="e.g. 5 x 3 x 2 inches" className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                          <p className="text-xs text-muted-foreground">Or the dimensions of the product going inside.</p>
                          <FormMessage />
                        </FormItem>
                      )} />
                      
                      <FormField control={form.control} name="weight" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Weight (Optional)</FormLabel>
                          <FormControl><Input placeholder="e.g. 12 oz" className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                          <p className="text-xs text-muted-foreground">Helps us determine material thickness.</p>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="budgetRange" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Unit Cost (Optional)</FormLabel>
                        <FormControl><Input placeholder="e.g. $1.50 - $2.00 / unit" className="rounded-none h-12 bg-background/50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Details */}
              {currentStep === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-serif font-semibold mb-8 border-b border-border pb-4">Project Details</h2>
                  
                  <div className="space-y-6">
                    <FormField control={form.control} name="launchTimeline" render={({ field }) => (
                      <FormItem>
                        <FormLabel>When do you need the packaging delivered?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none h-12 bg-background/50">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Expedited)</SelectItem>
                            <SelectItem value="1_2_months">1-2 Months</SelectItem>
                            <SelectItem value="3_4_months">3-4 Months</SelectItem>
                            <SelectItem value="flexible">Flexible / Planning Phase</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="structuralFeatures" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desired Finishes & Features</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Foil stamping, matte soft-touch, custom inserts..." className="rounded-none h-12 bg-background/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="projectDescription" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your brand, your goals, or any specific challenges you're facing with your current packaging..." 
                            className="rounded-none border-border min-h-[120px] bg-background/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Review */}
              {currentStep === 5 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-2xl font-serif font-semibold mb-8 border-b border-border pb-4">Review & Submit</h2>
                  
                  <div className="bg-secondary p-6 md:p-8 space-y-8 mb-8 border border-border">
                    <div>
                      <h4 className="font-serif font-semibold text-lg border-b border-border/50 pb-2 mb-4">Contact Info</h4>
                      <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                        <dt className="text-muted-foreground">Name:</dt>
                        <dd className="font-medium text-right">{formValues.firstName} {formValues.lastName}</dd>
                        <dt className="text-muted-foreground">Email:</dt>
                        <dd className="font-medium text-right">{formValues.email}</dd>
                        {formValues.company && (
                          <>
                            <dt className="text-muted-foreground">Company:</dt>
                            <dd className="font-medium text-right">{formValues.company}</dd>
                          </>
                        )}
                      </dl>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-lg border-b border-border/50 pb-2 mb-4">Project Specs</h4>
                      <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                        <dt className="text-muted-foreground">Category:</dt>
                        <dd className="font-medium text-right capitalize">{formValues.productCategory.replace('_', ' ')}</dd>
                        <dt className="text-muted-foreground">Format:</dt>
                        <dd className="font-medium text-right capitalize">{formValues.packagingType.replace('_', ' ')}</dd>
                        <dt className="text-muted-foreground">Quantity:</dt>
                        <dd className="font-medium text-right">{formValues.quantity.replace(/_/g, ' ').replace('plus', '+')}</dd>
                      </dl>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/10 p-6 flex items-start gap-4">
                    <Box className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-primary/80">
                      By submitting this form, our engineering team will review your specifications. If the project is a good fit, we'll reach out within 24 hours with next steps and preliminary estimates.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-12 flex justify-between items-center border-t border-border pt-8">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="rounded-none border-border h-12 px-6"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                ) : <div />}

                {currentStep < STEPS.length ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-12 px-8 ml-auto"
                  >
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-10 text-base"
                    disabled={submitQuote.isPending}
                  >
                    {submitQuote.isPending ? "Submitting Request..." : "Submit Project Details"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
