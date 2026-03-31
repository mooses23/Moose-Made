import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";

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
  subject: z.string().optional(),
  message: z.string().min(5, "Tell us a little bit about what you're working on"),
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
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    submitContact.mutate(
      { data },
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
            Let's <span className="text-accent italic font-light">talk</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Got a mockup you made with AI? A sketch on a napkin? A vague idea? Doesn't matter — reach out and we'll figure out the rest together. No intake forms, no jargon.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Reach out however you like</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">(555) 123-4567 — quickest way to reach us</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@moose-made.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Email</p>
                      <p className="text-muted-foreground text-sm">hello@moose-made.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary group-hover:text-accent transition-colors">Call us</p>
                      <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 border border-border">
              <MessageCircle className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-serif font-semibold mb-2 text-lg">Not sure where to start?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                That's completely fine! Just drop us a message or send a photo of your idea. We love helping people figure out what's possible.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
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
                  <h3 className="text-2xl font-serif font-semibold mb-4">You're all set!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out! We'll get back to you within a day — usually much sooner. Talk soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-none border-border"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif font-semibold mb-2 text-primary">Send us a message</h2>
                  <p className="text-muted-foreground text-sm mb-8">We read every message and reply personally.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Your name</FormLabel>
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
                            <FormLabel className="text-primary font-medium">Your email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@email.com" className="rounded-none border-border h-12 bg-background/50 focus-visible:ring-accent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">What are you trying to make?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your product, your idea, or just paste a link to your mockup. Feel free to include a phone number if you'd prefer we call or text."
                                className="rounded-none border-border min-h-[160px] bg-background/50 focus-visible:ring-accent resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none h-14 text-base mt-4"
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? "Sending..." : "Send Message"}
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
