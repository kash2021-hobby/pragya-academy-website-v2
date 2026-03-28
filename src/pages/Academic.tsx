import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import g3 from '@/assets/gallery-3.webp';
import g30 from '@/assets/gallery-30.webp';
import g32 from '@/assets/gallery-32.webp';
import principalImg from '@/assets/principal.jpg';
import advisorImg from '@/assets/advisor.jpg';

const tabs = ['Principal', 'Advisor'];

const Academic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = tabParam === 'advisor' ? 1 : 0;

  const handleTabChange = (i: number) => {
    setSearchParams({ tab: i === 1 ? 'advisor' : 'principal' }, { replace: true });
  };

  useEffect(() => {
    if (!tabParam) {
      setSearchParams({ tab: 'principal' }, { replace: true });
    }
  }, [tabParam, setSearchParams]);

  return (
    <>
      <PageHero title="Academic" subtitle="Leadership Messages" bgImages={[g3, g30, g32]} />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => handleTabChange(i)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  activeTab === i ? 'bg-orange text-primary-foreground shadow-lg' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}'s Message
              </button>
            ))}
          </div>

          {activeTab === 0 ? (
            <div key="principal" className="bg-card rounded-xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 shrink-0">
                  <img src={principalImg} alt="Principal" className="rounded-xl shadow-md w-full max-w-[250px] mx-auto" />
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">ড° ত্ৰিগুনাৰঞ্জন শৰ্মা</h3>
                    <p className="text-orange text-sm font-medium">M.Sc., Ph.D, অধ্যক্ষ</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">অধ্যক্ষৰ বাণী</h2>
                  <div className="text-muted-foreground leading-[1.9] space-y-4 text-base">
                    <p>বাইহাটা চাৰিআলিস্থিত "প্রজ্ঞা একাডেমী" বিজ্ঞান, কলা আৰু বাণিজ্য শাখাৰ এখন অগ্রণী শিক্ষানুষ্ঠান। উচ্চ মানদণ্ডৰ শিক্ষা প্ৰদানৰ জৰিয়তে ছাত্ৰ-ছাত্ৰীৰ শৈক্ষিক তথা বৌদ্ধিক বিকাশৰ উদ্দেশ্যৰে ২০১৭ বৰ্ষত প্ৰজ্ঞা একাডেমী স্থাপিত হৈছিল। অভিজ্ঞ তথা অহতা সম্পন্ন শিক্ষক-শিক্ষয়িত্ৰীৰ দ্বাৰা ছাত্ৰ-ছাত্ৰীসকলক অতি উচ্চ মানদণ্ডৰ শিক্ষা দিয়াৰ লগতে আত্মনিৰ্ভৰশীল তথা প্রতিযোগিতামূলক মনোভাৱ সৃষ্টি কৰাই এই শিক্ষানুষ্ঠানৰ মুখ্য উদ্দেশ্য।</p>
                    <p>সময়ে সময়ে বিভিন্ন পৰীক্ষাৰ জৰিয়তে শিক্ষণ পদ্ধতি ফলপ্রসূ কৰি তোলাৰ লগতে শিক্ষকসকলে ছাত্ৰ-ছাত্ৰীৰ গুণগত মান তথা সুপ্ত প্রতিভা বিকাশতো সমানে গুৰুত্ব আৰোপ কৰে। ত্রিবেণী সংগমৰ লেখিয়া শিক্ষক, ছাত্ৰ-ছাত্ৰী আৰু অভিভাৱকসকলৰ ঐক্যবদ্ধ প্ৰচেষ্টাৰ ফলত প্ৰজ্ঞাৰ শৈক্ষিক দিশটো দিনক-দিনে উর্ধমুখী হৈ গৈ থকাৰ উপৰিও শিক্ষাৰ্থীসকলৰ বিকাশৰ ক্ষেত্ৰতো এই অনুষ্ঠানখনিয়ে সমানে গুৰুত্ব আৰোপ কৰা আমাৰ পৰিলক্ষিত হৈছে।</p>
                    <p>সেয়েহে এই শিক্ষানুষ্ঠানখনৰ বাবে আপোনালোকৰ গঠনমূলক পৰামৰ্শৰ লগতে ইতিবাচক দৃষ্টিভঙ্গী আমাৰ সদায় কাম্য।</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium">Teaching Experience:</p>
                    <p className="text-sm text-muted-foreground">Swadeshi Academy 16 Years (Under ASSEB) Guwahati • Anandoram Barooah Academy 4 Years (Under ASSEB) Pathsala • MBRS, Borjhar 4 Years (Under CBSE) • NEET and Integrated Courses 7 Years, Career Point (Kota, Rajasthan)</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key="advisor" className="bg-card rounded-xl shadow-lg p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 shrink-0">
                  <img src={advisorImg} alt="Advisor" className="rounded-xl shadow-md w-full max-w-[250px] mx-auto" />
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">নাৰায়ণ গোস্বামী</h3>
                    <p className="text-orange text-sm font-medium">অৱসৰপ্ৰাপ্ত উপাধ্যক্ষ তথা মুৰব্বী অধ্যাপক, অৰ্থনীতি বিজ্ঞান বিভাগ, পূৱ কামৰূপ মহাবিদ্যালয়।</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">উপদেষ্টাৰ বাণী</h2>
                  <div className="text-muted-foreground leading-[1.9] space-y-4 text-base">
                    <p>প্রজ্ঞা একাডেমী সমগ্ৰ কামৰূপ জিলাৰ ভিতৰতে এখনি উন্নত মানদণ্ডৰ জাকত জিলিকা শিক্ষানুষ্ঠান। এই অনুষ্ঠানটিৰ মূল লক্ষ্য আৰু উদ্দেশ্যই হ'ল ছাত্ৰ-ছাত্ৰীৰ শৈক্ষিক, মানসিক তথা বৌদ্ধিক বিকাশ সাধন কৰা। ছাত্ৰ-ছাত্ৰী,শিক্ষক তথা অভিভাৱক সকলৰ ত্ৰিকৌণিক প্ৰচেষ্টাৰ জৰিয়তে ছাত্ৰ-ছাত্ৰীসকলৰ সৰ্বাংগীন উন্নয়নৰ অহৰহ প্ৰচেষ্টা চলাই অহা হৈছে। বৃহত্তৰ বাইহাটা চাৰিআলিত অনুষ্ঠিত অন্যতম আকর্ষণীয় শিক্ষা অনুষ্ঠান প্রজ্ঞাএকাডেমীত উন্নত মানৰ শিক্ষা প্ৰদানৰ অর্থেপ্রতিটো বিষয়তে অভিজ্ঞ তথা অহতা সম্পন্ন শিক্ষক নিযুক্তি দিয়াৰ লগতে শিক্ষাৰ্থীসকলৰ সুবিধাৰ্থে হোষ্টেল নাইবা অন্যান্য সুবিধাজনক আবাসৰ ব্যৱস্থা কৰা হৈছে।</p>
                    <p>ইয়াৰ লগতে সকলো সময়তে শিক্ষাৰ্থী সকলৰ নিৰীক্ষণ তথা তত্ত্বাৱধানৰ বাবে উপযুক্ত পৰিচালক-পৰিদৰ্শকক দায়িত্ব অর্পণ কৰা হৈছে। কামৰূপ জিলাৰ পূৱ-প্ৰান্তত অৱস্থিত এই অনুষ্ঠানটিয়ে ছাত্ৰ- ছাত্ৰীসকলৰ মাজত নিহিত হৈ থকা বিভিন্ন প্রতিভা বিকাশৰ অৰ্থে প্ৰতিটো বছৰে ন-ন কাৰ্যসূচীৰ অন্তৰ্ভুক্ত কৰি আহিছে। বিগত বছৰবোৰত এই অনুষ্ঠানৰ প্ৰায়খিনি ছাত্ৰ-ছাত্ৰীৰ সফলতাই অনুষ্ঠানটিৰ লগতে অঞ্চলটোৰ সুনাম কঢ়িয়াই আনিবলৈ সক্ষম হৈছে।</p>
                    <p>সেয়েহে আশা ৰাখিছোঁ আটাইৰে আন্তৰিকতা, সদিচ্ছা তথা গঠনসমূলক দিহা-পৰামৰ্শৰে অদূৰ ভৱিষ্যতেও যাতে প্রজ্ঞা একাডেমীয়ে প্রজ্ঞা সাধনাৰে সুনাগৰিক তথা মানৱ সম্পদ গঠনৰ জৰিয়তে বিশ্ব দৰবাৰত নিজৰ স্থান নিৰূপণ কৰিবলৈ সক্ষম হ'ব।</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Academic;
