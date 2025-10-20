export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: 'strategie-aktywacji',
    title: 'Strategie aktywacji użytkowników',
    short: 'Zwiększamy wskaźnik aktywacji nowych użytkowników poprzez optymalizację pierwszych kroków w produkcie.',
    price: 'od 8 900 PLN',
    features: [
      'Analiza ścieżki aktywacji',
      'Mapowanie punktów tarcia',
      'A/B testy kluczowych ekranów',
      'Optymalizacja time-to-value',
      'Dashboard wskaźników aktywacji'
    ],
    contentHtml: `
      <p>Aktywacja użytkowników to kluczowy moment w cyklu życia produktu SaaS. Statystyki pokazują, że ponad 75% użytkowników nigdy nie wraca po pierwszej sesji, jeśli nie odnajdą wartości w pierwszych minutach.</p>
      
      <h2>Dlaczego aktywacja jest kluczowa?</h2>
      <p>Pierwsze wrażenie decyduje o sukcesie produktu. Użytkownicy, którzy szybko osiągają swój "aha moment", są 3x bardziej skłonni do konwersji na płatnych klientów. Nasza strategia aktywacji koncentruje się na identyfikacji i optymalizacji tego krytycznego momentu.</p>
      
      <h2>Nasz proces</h2>
      <p>Rozpoczynamy od głębokiej analizy danych behawioralnych - śledzimy każdy krok nowych użytkowników, identyfikujemy miejsca, gdzie tracą zainteresowanie lub napotykają na problemy. Następnie przeprowadzamy wywiady z użytkownikami, aby zrozumieć ich oczekiwania i frustracje.</p>
      
      <h2>Czego możesz się spodziewać?</h2>
      <ul>
        <li>Wzrost wskaźnika aktywacji o 30-50%</li>
        <li>Skrócenie czasu do pierwszej wartości (Time to Value)</li>
        <li>Wyższe wskaźniki retencji w pierwszym tygodniu</li>
        <li>Jasny roadmap optymalizacji onboardingu</li>
      </ul>
      
      <p>Pracujemy w sprintach 2-tygodniowych, dostarczając mierzalne rezultaty już po pierwszym cyklu. Każda hipoteza jest testowana, mierzona i iterowana na podstawie rzeczywistych danych z Twojego produktu.</p>
    `
  },
  {
    slug: 'trial-to-paid',
    title: 'Optymalizacja ścieżki trial-to-paid',
    short: 'Konwertujemy użytkowników testowych w płacących klientów poprzez strategiczne punkty kontaktu i automatyzację.',
    price: 'od 12 500 PLN',
    features: [
      'Audyt ścieżki konwersji trial',
      'Email nurturing campaigns',
      'In-app messaging strategy',
      'Pricing page optimization',
      'Analiza przyczyn odrzuceń'
    ],
    contentHtml: `
      <p>Konwersja z trialu na płatną subskrypcję to najtrudniejszy etap w lejku sprzedażowym SaaS. Średni współczynnik konwersji trial-to-paid wynosi zaledwie 15-25%, co oznacza ogromny potencjał wzrostu.</p>
      
      <h2>Kluczowe wyzwania trial-to-paid</h2>
      <p>Większość produktów SaaS traci użytkowników na etapie trialu z trzech głównych powodów: brak osiągnięcia "aha moment", niejasna propozycja wartości przy płatności, lub po prostu brak odpowiedniego nurturingu w trakcie okresu próbnego.</p>
      
      <h2>Nasza metodologia</h2>
      <p>Analizujemy pełną ścieżkę użytkownika od rejestracji do konwersji. Identyfikujemy kluczowe momenty, w których użytkownicy są najbardziej skłonni do konwersji - to tzw. "buying signals". Następnie budujemy strategię komunikacji, która subtelnymi przypomnieniami prowadzi użytkownika do decyzji zakupowej.</p>
      
      <h2>Co zyskujesz?</h2>
      <ul>
        <li>Wzrost konwersji trial-to-paid o 40-70%</li>
        <li>Zautomatyzowane kampanie nurturingowe</li>
        <li>Optymalizacja pricing page pod konwersję</li>
        <li>Monitoring buying signals w czasie rzeczywistym</li>
        <li>Strategia retention dla nowych płacących użytkowników</li>
      </ul>
      
      <p>Pracujemy z narzędziami takimi jak Segment, Mixpanel, Customer.io, aby zbudować spersonalizowane doświadczenia, które maksymalizują szanse na konwersję każdego użytkownika trial.</p>
    `
  },
  {
    slug: 'growth-sprinty',
    title: 'Growth-sprinty produktowe',
    short: 'Intensywne 2-tygodniowe cykle eksperymentów wzrostowych z jasno określonymi metrykami i celami.',
    price: 'od 15 000 PLN / sprint',
    features: [
      'Priorityzacja eksperymentów (ICE scoring)',
      'Rapid prototyping',
      'A/B testing infrastruktura',
      'Weekly review sessions',
      'Dokumentacja learnings'
    ],
    contentHtml: `
      <p>Growth-sprinty to metodologia szybkiego eksperymentowania, która pozwala testować dziesiątki hipotez wzrostowych w krótkim czasie. Zamiast wielomiesięcznych projektów, dostarczamy mierzalne rezultaty co 2 tygodnie.</p>
      
      <h2>Jak działają growth-sprinty?</h2>
      <p>Sprint rozpoczyna się od sesji brainstormingowej, gdzie generujemy 20-30 pomysłów na eksperymenty. Następnie priorytetyzujemy je według ICE score (Impact, Confidence, Ease), wybierając 3-5 najlepszych do realizacji w danym sprincie. Każdy eksperyment ma jasno określoną hipotezę, metrykę sukcesu i sposób pomiaru.</p>
      
      <h2>Obszary eksperymentów</h2>
      <p>Testujemy wszystko - od mikrozmian w copywritingu, przez redesign kluczowych ekranów, po nowe funkcjonalności w produkcie. Nasze sprinty obejmują: onboarding flows, pricing experiments, email campaigns, in-app messaging, feature adoption, viralność, monetyzację.</p>
      
      <h2>Rezultaty</h2>
      <ul>
        <li>10-20 przetestowanych eksperymentów miesięcznie</li>
        <li>Dokumentacja wszystkich learnings i insights</li>
        <li>Budowanie kultury eksperymentowania w zespole</li>
        <li>Jasne metryki North Star dla produktu</li>
        <li>Roadmap oparty na danych, nie opiniach</li>
      </ul>
      
      <p>Po każdym sprincie przeprowadzamy retrospektywę, analizujemy wyniki eksperymentów i planujemy kolejne iteracje. Średnio 30-40% eksperymentów kończy się sukcesem - te wdrażamy na stałe do produktu.</p>
    `
  },
  {
    slug: 'analiza-kohort',
    title: 'Analiza kohort i retencji',
    short: 'Głęboka analiza zachowań użytkowników w czasie, identyfikacja wzorców retencji i churn prevention.',
    price: 'od 7 500 PLN',
    features: [
      'Cohort analysis setup',
      'Retention curves analysis',
      'Churn prediction models',
      'Feature adoption tracking',
      'Custom dashboards w Mixpanel/Amplitude'
    ],
    contentHtml: `
      <p>Retencja to najważniejsza metryka produktu SaaS. Nawet najlepszy akwizycyjny funnel nie pomoże, jeśli użytkownicy odchodzą po pierwszym miesiącu. Analiza kohort pozwala zrozumieć, które grupy użytkowników pozostają, a które odchodzą - i dlaczego.</p>
      
      <h2>Co to jest analiza kohort?</h2>
      <p>Kohorta to grupa użytkowników, którzy zarejestrowali się w tym samym okresie (np. tydzień, miesiąc). Analizując ich zachowanie w czasie, możemy zobaczyć wzorce: które funkcje wpływają na retencję, w którym momencie użytkownicy najczęściej rezygnują, jakie działania korelują z długoterminowym zaangażowaniem.</p>
      
      <h2>Nasz proces analizy</h2>
      <p>Tworzymy zaawansowane dashboardy w Mixpanel lub Amplitude, które automatycznie śledzą kluczowe metryki retencji. Analizujemy retention curves dla różnych kohort, identyfikujemy "power users" i badamy, co ich wyróżnia. Budujemy modele predykcyjne churn - system, który przewiduje, który użytkownik jest zagrożony odejściem, zanim faktycznie to zrobi.</p>
      
      <h2>Wartość dla produktu</h2>
      <ul>
        <li>Identyfikacja kluczowych "aha moments"</li>
        <li>Wczesne wykrywanie użytkowników zagrożonych churn</li>
        <li>Optymalizacja roadmapu pod kątem retencji</li>
        <li>Segmentacja użytkowników wg engagement</li>
        <li>ROI każdej funkcjonalności w produkcie</li>
      </ul>
      
      <p>Dostarczamy nie tylko raporty, ale konkretne rekomendacje działań: które funkcje promować, gdzie dodać onboarding, jak budować nawyki użytkowników. Wszystko oparte na twardych danych, nie domysłach.</p>
    `
  },
  {
    slug: 'onboarding',
    title: 'Onboarding użytkowników',
    short: 'Projektowanie i wdrażanie sekwencji onboardingowych, które prowadzą użytkownika do pierwszej wartości.',
    price: 'od 10 900 PLN',
    features: [
      'User journey mapping',
      'Interactive tutorials design',
      'Progress indicators',
      'Contextual tooltips',
      'Email onboarding sequences'
    ],
    contentHtml: `
      <p>Onboarding to nie tylko seria tooltipów czy welcome email. To strategiczny proces, który prowadzi użytkownika od rejestracji do momentu, w którym osiąga realną wartość z produktu - i zaczyna go używać regularnie.</p>
      
      <h2>Dlaczego onboarding jest krytyczny?</h2>
      <p>Badania pokazują, że 86% użytkowników bardziej prawdopodobnie pozostanie z produktem, jeśli otrzyma dobry onboarding. Problem w tym, że większość produktów SaaS ma chaotyczny, przytłaczający proces wdrażania, który odstrasza zamiast angażować.</p>
      
      <h2>Nasza filozofia onboardingu</h2>
      <p>Projektujemy minimalistyczne, kontekstualne sekwencje, które pokazują użytkownikowi dokładnie to, czego potrzebuje w danym momencie. Żadnych długich tutoriali na starcie - zamiast tego stopniowe odkrywanie funkcji w miarę, jak użytkownik zagłębia się w produkt. Używamy progress barów, osiągnięć, mikro-celebracji, aby motywować do kolejnych kroków.</p>
      
      <h2>Komponenty naszego onboardingu</h2>
      <ul>
        <li>Welcome screen z jasną propozycją wartości</li>
        <li>Setup wizard dla szybkiej konfiguracji</li>
        <li>Contextual tooltips w kluczowych miejscach</li>
        <li>Empty states z call-to-action</li>
        <li>Email nurturing z tips & tricks</li>
        <li>Checklist ukończenia onboardingu</li>
      </ul>
      
      <p>Mierzymy sukces onboardingu przez pryzmat konkretnych działań: czy użytkownik osiągnął "activation moment", czy wrócił w kolejnym dniu, czy zaprosił członków zespołu. Iterujemy i optymalizujemy każdy krok na podstawie danych.</p>
    `
  },
  {
    slug: 'pricing-monetyzacja',
    title: 'Pricing i monetyzacja',
    short: 'Strategiczne podejście do cen, pakietów i modeli monetyzacji, które maksymalizują ARPU i LTV.',
    price: 'od 14 900 PLN',
    features: [
      'Pricing strategy audit',
      'Value-based pricing design',
      'Packaging & tiers optimization',
      'Pricing page redesign',
      'Upsell & cross-sell flows'
    ],
    contentHtml: `
      <p>Pricing to nie tylko liczby na stronie. To strategiczne narzędzie, które kształtuje percepcję wartości produktu, determinuje segment klientów i bezpośrednio wpływa na przychody. Złe decyzje pricingowe mogą kosztować miliony w utraconych przychodach.</p>
      
      <h2>Najczęstsze błędy pricingowe</h2>
      <p>Wiele produktów SaaS cierpi na "underpricing" - boją się podnieść cen, choć klienci byliby gotowi płacić więcej. Inne mają zbyt skomplikowane tabelki z dziesiątkami funkcji w różnych pakietach, co paraliżuje decyzję zakupową. Jeszcze inne nie rozumieją, jaką wartość dostarczają i cenią się "jak konkurencja".</p>
      
      <h2>Nasz proces pricingowy</h2>
      <p>Rozpoczynamy od głębokiego audytu: analizujemy obecny model przychodów, segmenty klientów, willingness to pay, konkurencję. Przeprowadzamy wywiady z klientami, aby zrozumieć, za co faktycznie są gotowi płacić. Testujemy różne strategie: value-based pricing, usage-based, per-seat, freemium vs trial.</p>
      
      <h2>Rezultaty optymalizacji</h2>
      <ul>
        <li>Wzrost ARPU (Average Revenue Per User) o 25-60%</li>
        <li>Wyższy LTV (Lifetime Value) dzięki lepszemu dopasowaniu tiers</li>
        <li>Jasna komunikacja wartości na pricing page</li>
        <li>Strategia upsell dla obecnych klientów</li>
        <li>A/B testing cen i pakietów</li>
      </ul>
      
      <p>Nie boję się eksperymentować z ceną - dla różnych segmentów, w różnych regionach, w różnym czasie. Budujemy też infrastrukturę do dynamicznego pricingu i personalizacji ofert w oparciu o behavioral data.</p>
    `
  }
];