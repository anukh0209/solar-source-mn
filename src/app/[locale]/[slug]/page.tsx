import { getClient } from "@/lib/apollo/server-client";
import { CP_PAGES, CP_PAGE_LIST } from "@/graphql/cms/queries/page";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      try {
        const { data } = await getClient().query<{
          cpPages?: Array<{ slug: string }>;
        }>({
          query: CP_PAGES,
          variables: { language: locale },
          context: { fetchOptions: { next: { revalidate: 60 } } },
        });
        return (data?.cpPages ?? []).map((p) => ({ locale, slug: p.slug }));
      } catch {
        return [];
      }
    })
  );
  return results.flat();
}

export async function generateMetadata(
  { params }: { params: { locale: string; slug: string } }
): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const { data } = await getClient().query<{
      cpPageList?: { pages?: Array<{ slug: string; name?: string; description?: string }> };
    }>({
      query: CP_PAGE_LIST,
      variables: { language: locale, limit: 1 },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    const page = data?.cpPageList?.pages?.find((p) => p.slug === slug);
    if (!page) return {};
    return {
      title: page.name,
      description: page.description ?? undefined,
    };
  } catch {
    return {};
  }
}

export default async function CmsPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = await params;
  
  try {
    const { data } = await getClient().query<{
      cpPages?: Array<{ slug: string; name?: string; content?: string }>;
    }>({
      query: CP_PAGES,
      variables: { language: locale },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    
    const page = data?.cpPages?.find((p) => p.slug === slug);
    if (!page) notFound();
    
    return (
      <div className="container py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{page.name}</h1>
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content ?? "" }} 
        />
      </div>
    );
  } catch {
    notFound();
  }
}
