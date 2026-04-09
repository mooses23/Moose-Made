import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, MessageCircle, CheckCircle } from "lucide-react";

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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  idea: z.string().min(20, "Please describe what you're trying to make — even a rough idea is fine"),
  category: z.string().min(1, "Product category helps us understand the project"),
  quantity: z.string().min(1, "A rough quantity range helps us assess fit"),
  timeline: z.string().optional(),
  referral: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      idea: "",
      category: "",
      quantity: "",
      timeline: "",
      referral: "",
    },
  });

  function onSubmit(data: FormValues) {
    const message = [
      `Company/Brand: ${data.company || "Not provided"}`,
      `Idea: ${data.idea}`,
      `Product Category: ${data.category || "Not provided"}`,
      `Estimated Quantity: ${data.quantity || "Not provided"}`,
      `Timeline: ${data.timeline || "Not provided"}`,
      `How they heard about us: ${data.referral || "Not provided"}`,
    ].join("\n");

    submitContact.mutate(
      { data: { name: data.name, email: data.email, subject: "Project Inquiry", message } },
      {
        onSuccess: () => {
          setIsSubmitted(true);
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <div className="bg-background pt-12 pb-24 min-h-[80vh]">
      <section className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.1] mb-6 text-primary">
            Start a <span className="text-accent italic font-light">conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This form is for founders, creators, and small brands who are serious about bringing a physical product to life. If that's you — tell us about it. We read every inquiry and respond personally.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">How to reach us</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="mailto:hello@moose-made.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Email us</p>
                      <p className="text-muted-foreground text-sm">hello@moose-made.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Response time</p>
                      <p className="text-muted-foreground text-sm">We reply to all inquiries within one business day — usually sooner.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 border border-border">
              <MessageCircle className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-serif font-semibold mb-2 text-lg">At an early stage?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You don't need a finished brief to reach out. A rough idea, a reference product, or even a description of what you're trying to solve is enough to start.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="bg-white p-8 md:p-12 border border-border shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-secondary text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">We've got it.</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. We'll review your project details and get back to you within one business day — usually sooner.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-none border-border"
                  >
                    Submit another inquiry
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-semibold mb-2 text-primary">Tell us about your project</h2>
                  <p className="text-muted-foreground text-sm mb-8">The more context you share, the better we can assess how to help.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">Your name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">Email address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="jane@yourbrand.com" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Company or brand name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Brand Co." className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="idea"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">What are you trying to make? *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your product idea — what it is, what it does, and any constraints that matter. Include a link to a reference if you have one."
                                className="rounded-none border-border min-h-[140px] bg-background/50 focus-visible:ring-accent resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">Product category *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Food & Bev, Apparel, Consumer Goods" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">Estimated quantity *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 500 units, 5,000 units" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">Target timeline</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 3 months, launch by Q3" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="referral"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-primary font-medium">How did you hear about us?</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Referral, Instagram, Search" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 text-base mt-4"
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? "Sending..." : "Send My Project Brief"}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
