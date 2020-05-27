import { format } from 'https://deno.land/x/date_fns/index.js';

interface Story {
  title: string;
  url: string;
  created_at_i: number;
}

interface FormattedStory {
  title: string;
  url: string;
  createdAt: string;
}

export const mapStory = (story: Story): FormattedStory => ({
  title: story.title,
  url: story.url,
  createdAt: format(
    new Date(story.created_at_i * 1000),
    'yyyy-MM-dd'
  ),
});
