import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: Props) {
  const Card = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 hover:border-[#3D7A9E] transition-colors duration-300 h-full"
    >
      <h3 className="font-serif text-lg mb-2">{title}</h3>
      <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2 py-1 bg-[#1E1E1E] text-[#666666] rounded">{tag}</span>
        ))}
      </div>
    </motion.div>
  );

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer">{Card}</a>;
  }
  return Card;
}
