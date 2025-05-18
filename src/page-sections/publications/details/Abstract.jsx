import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
export default function Abstract() {
  return <div>
      <SectionTitle title="Abstract" fontSize={24} />
      <Paragraph color="text.secondary" fontSize={16} lineHeight={1.7} textAlign="justify">
        This paper presents an automated process for extracting text from video frames by specifically targeting text-rich regions, identified through advanced scene text detection methods. Unlike traditional techniques that apply OCR to entire frames—resulting in excessive computations and higher error rates—our approach focuses only on textual areas, improving both speed and accuracy. The system integrates effective preprocessing routines, cutting-edge text detectors (CRAFT, DBNet), and advanced recognition engines (CRNN, transformer-based) within a unified framework. Extensive testing on datasets such as ICDAR 2015, ICDAR 2017 MLT, and COCO-Text demonstrates consistent gains in F-scores and word recognition rates, significantly outperforming baseline methods. Additionally, detailed error analysis, ablation studies, and runtime evaluations offer deeper insights into the strengths and limitations of the proposed method. This pipeline is particularly useful for tasks like video indexing, semantic retrieval, and real-time multimedia analysis.
      </Paragraph>
    </div>;
}